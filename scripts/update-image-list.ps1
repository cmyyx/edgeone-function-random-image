# 遇到错误立即中止脚本，避免生成不完整的结果
$ErrorActionPreference = 'Stop'

# 项目根目录（脚本所在目录的上一级）
$root = Split-Path -Parent $PSScriptRoot
# 需要被更新的函数文件
$functionPath = Join-Path $root 'functions\image.js'
# 横屏与竖屏图片目录
$horizontalDir = Join-Path $root 'img\h'
$verticalDir = Join-Path $root 'img\v'

# 允许的图片扩展名（不区分大小写）
$allowedExt = @(
  '.avif', '.webp', '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.heic', '.heif'
)

# 读取目录内的图片文件名（仅文件名，不含路径）
function Get-ImageNames([string]$dirPath) {
  # 目录不存在则返回空数组
  if (-not (Test-Path $dirPath)) {
    return @()
  }

  # 获取文件列表 -> 按扩展名过滤 -> 按名称排序 -> 只保留文件名
  return Get-ChildItem -Path $dirPath -File -Force |
    Where-Object { $allowedExt -contains $_.Extension.ToLowerInvariant() } |
    Sort-Object -Property Name |
    ForEach-Object { $_.Name }
}

# 生成 JS 数组文本（按 varName 输出为：
# var horizontalImages = [
#   'a.avif',
# ];
# ）
function BuildArrayText([string]$varName, [string[]]$items) {
  $lines = @()
  $lines += "var $varName = ["
  foreach ($item in $items) {
    # 转义反斜杠和单引号，保证 JS 字符串合法
    $escaped = $item.Replace('\', '\\').Replace("'", "\\'")
    $lines += "  '$escaped',"
  }
  $lines += "];"
  return ($lines -join "`n")
}

# 确认函数文件存在
if (-not (Test-Path $functionPath)) {
  throw "File not found: $functionPath"
}

# 扫描图片目录
$horizontalImages = Get-ImageNames $horizontalDir
$verticalImages = Get-ImageNames $verticalDir

# 读取函数文件内容（原样读取）
$content = Get-Content -Path $functionPath -Raw

# 用正则定位 horizontalImages / verticalImages 数组块
# 注意：PowerShell 字符串中反斜杠不是转义符，因此这里只需要写单个 \
$patternH = '(?s)var horizontalImages = \[(.*?)\];'
$patternV = '(?s)var verticalImages = \[(.*?)\];'

# 生成替换后的数组文本
$replacementH = BuildArrayText 'horizontalImages' $horizontalImages
$replacementV = BuildArrayText 'verticalImages' $verticalImages

# 如果没找到数组定义，说明文件结构被改过，直接报错
if ($content -notmatch $patternH) {
  throw "horizontalImages array not found in $functionPath"
}
if ($content -notmatch $patternV) {
  throw "verticalImages array not found in $functionPath"
}

# 用新数组替换旧数组
$content = [regex]::Replace($content, $patternH, $replacementH)
$content = [regex]::Replace($content, $patternV, $replacementV)

# 写回函数文件（不额外添加结尾空行）
Set-Content -Path $functionPath -Value $content -NoNewline

# 输出统计信息
Write-Host "Updated image lists in $functionPath"
Write-Host "Horizontal: $($horizontalImages.Count) file(s)"
Write-Host "Vertical: $($verticalImages.Count) file(s)"
