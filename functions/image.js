// 原始版本来自 二叉树树 (https://github.com/afoim/EdgeOne_Function_PicAPI/blob/main/functions/pic.js)

// EdgeOne Pages Function export
export function onRequest(context) {
  return handleRequest(context.request);
}

// 图片列表（保留原文件名，可自行维护）
var horizontalImages = [
  '101274284_p0.avif',
  '1089657_hirano_katsuyuki_shiroha_nemu.avif',
  '11390300_chen_bin_UnknownCharacter.avif',
  '116826839_p0.avif',
  '12014670_exusiai_dust_reisa_(blue_archive).avif',
  '1763874302372.avif',
  '244 - 甘雨.avif',
  '78486250_p0.avif',
  '9857503_guzangnanfeng_UnknownCharacter.avif',
  '艾斯特一生推_二人的相识_128166262_p0.avif',
  '达达大圣_🫐蓝莓口味雪糕🫐_136393403_p0.avif',
  '蝶天希_乐园！_115706880_p1.avif',
  '福木とくわ_♡🪄🫧_117303520_p0.avif',
  '宮瀬まひろ_ご奉仕レミリア2_80996818_p0.avif',
  '鬼针草_胧华梦_128805855_p0.avif',
  '鬼针草_小纸夜_131469928_p0.avif',
  '可乐米mi_【稿件展示】巧克力的香气_134197640_p0.avif',
  '緑風マルト🌿_CryoLight❄️_118066817_p0.avif',
  '猫田みん_【Skeb】アイドル衣装なみゃーこ先輩_132471343_p0.avif',
  '梅原生（せい）_🎇_133931396_p0.avif',
  '梅原生（せい）_💛_133772567_p0.avif',
  '梅原生（せい）_🩵🩷_129348929_p0.avif',
  '梅原生（せい）_无题_119466142_p0.avif',
  '柠檬静静静静_美游_125245434_p1.avif',
  '千夨chia_列车_130636057_p0.avif',
  '山桂贰_黑潮_101430509_p0.avif',
  '手のけいれん_《星影に染まる純白の魔女》_137776120_p0.avif',
  '桃稚ちあ🎀_天使しおんちゃん_110452836_p0.avif',
  '天夢(てんむ）森流彩_白髪もふきつね🦊_121291801_p0.avif',
  '桐宮つるぎ_skeb_123951757_p0.avif',
  '無惑桑_时依_108686706_p0.avif',
  '桜田ハネ_🌸_129899192_p0.avif',
  '真理-Mari土西し-b08a_小羊_131166877_p0.avif',
  'Aria_Commission🏥💟_126613451_p0.avif',
  'chokei_2024.9.26星绘生日_122782209_p1.avif',
  'DaSiu_生塩ノア.2025水着_134855952_p0.avif',
  'Date锶氚麻酱_2024.9.18绘图_123360788_p0.avif',
  'devil heavens_狗狗稿_104732752_p0.avif',
  'devil heavens_千堂真白_125147916_p0.avif',
  'fcabe56a98ab86412adb80c98d256dd3412646341.avif',
  'G5EVI7uaYAAKcJF.avif',
  'GODSOUL_Alice_SweetSleep.avif',
  'GODSOUL_Freya_SweetSummer.avif',
  'GODSOUL_Kami_DreamOfGameDesign.avif',
  'GODSOUL_LiroHela_SweetCake.avif',
  'GODSOUL_LiroHela_wanderland.avif',
  'GODSOUL_Odin_ComicDream.avif',
  'illust_120940509_20241020_013136.avif',
  'Image_1263468534245990.avif',
  'IMG_20241018_014515_090.avif',
  'Joezunzun_Majo_107191821_p0.avif',
  'KuroiDa_@小开关__127234472_p0.avif',
  'MareChatoyancy.avif',
  'MAYO_🌺_119225130_p0.avif',
  'Nanoka_ふたこ_98497786_p0.avif',
  'okutiri_レイサ_138383607_p0.avif',
  'pottsness_カワイイネコチャンが増えました！_132084515_p0.avif',
  'RebellionGODSOUL_All.avif',
  'RebellionGODSOUL_CyberMyth.avif',
  'RebellionGODSOUL_LincyGODSOUL.avif',
  'RebellionGODSOUL_Myth_Swimsuit.avif',
  'Siera🐱_🕊_119297683_p0.avif',
  'yande.re 1219780 alllisso animal_ears dress fishnets garter heterochromia no_bra skirt_lift thighhighs wallpaper weapon.avif',
  'yande.re 1223456 alllisso animal_ears dress horns indie_virtual_youtuber no_bra wallpaper wet yuchi_(vtuber).avif',
  'yande.re 1225043 alllisso dress emiphoria garter indie_virtual_youtuber no_bra see_through wallpaper wings.avif',
  'yande.re 1241084 alllisso animal_ears bai_(vtuber) horns indie_virtual_youtuber leotard no_bra see_through tail thighhighs wallpaper.avif',
  'YogurtWZI_蓝莓蛋糕_135010180_p0.avif',
  'おもち もなか🐰_Perfume🦢✨_91828100_p0.avif',
  'くしだ_アリス_133880209_p0.avif',
  'シロ９じら_スケブ納品物248_123195671_p0.avif',
  'シロ９じら_スケブ納品物263_126336691_p0.avif',
  'ちょみます_skeb_114835914_p0.avif',
  'ぬん🧸お仕事募集中_水着あぴゃりちゃん🍥🌟_134027953_p0.avif',
  'みやヨキ_Ajuly_131588705_p0.avif',
  'ももこ_💞_102678030_p0.avif',
  'ゆのくらげ_Skeb 90 こなちゃ様_115721938_p0.avif',
  'らてこ_アルティメットまどか_87407209_p0.avif',
];

var verticalImages = [
  '__hakui_koyori_and_kokoro_hololive_drawn_by_momoko_momopoco__5449634e51dd40b8e4f0ec3c12917469.avif',
  '-AKOvO-_桜井ミヨ_136679532_p0.avif',
  '0A19A207E042FBB5BEC32958C7BC61A9.avif',
  '10011488_momoko_(momopoco)_hiyori_(momoko).avif',
  '10074006_torino_aqua_firefly_(honkai：_star_rail),stelle_(honkai：_star_rail),trailblazer_(honkai：_star_rail).avif',
  '10187824_deyui_female_tyrant_(stella_sora),tyrant_(stella_sora).avif',
  '11345195_rucaco_kamuri_amuru.avif',
  '11574811_exusiai_dust_kyoka_(princess_connect!),kyoka_(summer)_(princess_connect!).avif',
  '11877936_d_omm_kurenagi_eri.avif',
  '1221968_siooooono_UnknownCharacter.avif',
  '12361406_komachi_pochi_UnknownCharacter.avif',
  '12435522_momoko_(momopoco)_hiyori_(momoko).avif',
  '126092733_p0.avif',
  '13091024_kitano_yukito_kaga_sumire.avif',
  '13112588_hoshi_(snacherubi)_UnknownCharacter.avif',
  '1758181425099.avif',
  '1763874276702.avif',
  '1764441743154.avif',
  '5517713_umemaro_(siona0908)_hatsune_miku.avif',
  '5WHWxST.avif',
  '8487674_exusiai_dust_azusa_(blue_archive),azusa_(swimsuit)_(blue_archive).avif',
  '8847573_exusiai_dust_arona_(blue_archive).avif',
  '9665673_exusiai_dust_hifumi_(blue_archive),hifumi_(swimsuit)_(blue_archive),peroro_(blue_archive).avif',
  '达达大圣_👻🎃🍬🌕_137138555_p0.avif',
  '地雷系女子 - 都说了不是猫咪啦！.avif',
  '荻pote_待ち合わせ。_138883077_p0.avif',
  '芙影幻夏 - 好好学习.avif',
  '芙影幻夏 - 心上猫.avif',
  '鬼针草_黎歌_128837865_p0.avif',
  '鬼针草_酸柚粥_130501995_p0.avif',
  '哈基蜜集 - 插画师本人.avif',
  '哈基蜜集 - 天才小画家.avif',
  '哈基蜜集 - 泳装约会.avif',
  '哈基蜜集 - 抓住小C.avif',
  '笠语流光 - 心动秘约.avif',
  '笠语流光 - 专属礼物.avif',
  '恋梦灰忆 - 匣中猫影.avif',
  '猫绒陷阱 - 毛绒温度.avif',
  '猫绒陷阱 - 拍摄终止！喵！.avif',
  '猫绒陷阱 - 星梦秘境.avif',
  '猫绒陷阱 - 牙痛呼呼.avif',
  '猫田みん_夏のみゃーこ先輩🏖☀️_130696938_p0.avif',
  '梅原生（せい）_胡桃Usa_132625261_p0.avif',
  '梅原生（せい）_ルナちょむ🌙_133337546_p0.avif',
  '妹妹养成手册 - 草莓蛋糕.avif',
  '墨琊moya_commission410酸柚粥sayo_137211170_p0.avif',
  '青葉もち_百合咲ミカ、お誕生日おめでとう！_132984565_p0.avif',
  '榊原またぎ_「今年も一年お疲れ様！」_125738734_p0.avif',
  '榊原またぎ_白百合の花嫁_126963596_p0.avif',
  '失忆小蝴蝶_白毛和风萝莉_113919710_p0.avif',
  '桃稚ちあ🎀_どこから食べる？🎀_125490859_p0.avif',
  '桃稚ちあ🎀_ねこみみお嬢様🎀_125528550_p0.avif',
  '夏稀 とむ_さ、サボってた訳じゃなくて…ですね…_123707340_p0.avif',
  '小日向ほしみ_天の音_124364190_p0.avif',
  '小叶子Miv_二階堂ヒロ_139341637_p0.avif',
  '飴玉コンA08ab／ア78b_春色メイド🌸🌸_118182064_p0.avif',
  '飴玉コンC107参加します！_ハッピーバレンタイン♡_127243731_p0.avif',
  '悠tacC_【委托】香甜马卡龙配小兔兔～_129851766_p0.avif',
  '雲小猫_海に遊びに行こうか！_120709212_p0.avif',
  '雲小猫_秋沙銭湯でバイトしているフリーナちゃん～～_127601687_p0.avif',
  '雲小猫_神里綾華生誕祭2024_122839413_p0.avif',
  '知花そら_summer🌻_134137290_p0.avif',
  '柊せんせー＠あくありーむ_【Skebリクエスト】甘妃らむねさん_131974014_p0.avif',
  'Darkecho_comm_113763492_p0.avif',
  'Esseppd_ハルナ_134590056_p0.avif',
  'GODSOUL_LiroHela_Water.avif',
  'IjtXZhu.avif',
  'Image_1507895830107279.avif',
  'Image_1767005725170.avif',
  'Image_1767893033649.avif',
  'Image_427790173221289.avif',
  'KuroiDa_OC_135282414_p0.avif',
  'MAYO_🌺🍒✨_122951627_p0.avif',
  'N9FVajD.avif',
  'NaNa_レイサ_136636361_p0.avif',
  'Pine_ナヒーダ_136778410_p0.avif',
  'RCjDHsX.avif',
  'rucaco／るかこ_夜更かしわんちゃん_127123304_p0.avif',
  'Sannio_钉宫妮妮Ninico_97324278_p0.avif',
  'tenmaru_バーバラ_127721947_p0.avif',
  'tenmaru_バーバラ_127721947_p1.avif',
  'tenmaru_バーバラ_127721947_p2.avif',
  'torino_機械仕掛けの水底より_111157207_p0.avif',
  'torino_露天風呂を視察する瑞希さん_127966453_p0.avif',
  'torino_謎煙の花_129348960_p0.avif',
  'torino_想いを込めて_132740037_p0.avif',
  'torino_葬花集め_130519992_p0.avif',
  'torino_お忍びバケーション_132239676_p0.avif',
  'torino_サマーメイドシトラリ_133850927_p0.avif',
  'WERI_💝🤎_127252723_p0.avif',
  'WERI_🖤💕_122436730_p0.avif',
  'WERI_朝_123214277_p0.avif',
  'yande.re 1169845 alllisso skirt_lift.avif',
  'うさり_悪戯もしていいよ…_123866330_p0.avif',
  'うさり_暑いね・・・_109426739_p0.avif',
  'うさり_お待ちしておりました。旦那様・・・っ_126734306_p0.avif',
  'おにねこ_Clear sunset_108991443_p0.avif',
  'おもち もなか🐰_ふゆちゃん🛒_125370342_p0.avif',
  'きゅりお_サマーこより_133957261_p0.avif',
  'くしだ_『落ちこぼれ生徒の魔法学校入学式』_123395967_p0.avif',
  'くしだ_アリス_130158542_p0.avif',
  'ころんびぁ_水着び☕️_133821244_p0.avif',
  'ころんびぁ_夏と、海と、スイーツ_133821343_p0.avif',
  'ころんびぁ_しゃぼん使いねこ_132503110_p0.avif',
  'ころんびぁ_ねこ出没_115716740_p0.avif',
  'ころんびぁ_びあちゃん_126246450_p0.avif',
  'こんぺ伊藤 2日目東4メ61b_黒亞めあ様生誕祭イラスト_132000702_p0.avif',
  'こんぺ伊藤 2日目東4メ61b_mona様生誕イベントイラスト_125625696_p0.avif',
  'こんぺ伊藤 2日目東4メ61b_くらげちゃん_133027975_p0.avif',
  'こんぺ伊藤 2日目東4メ61b_シースルーナースちゃん_133447417_p0.avif',
  'こんぺ伊藤 2日目東4メ61b_セシリア様生誕祭イラスト_130083646_p0.avif',
  'さふぁいあ_｢一緒に夜食のドーナツ食べちゃう？？｣_123665956_p0.avif',
  'しおの_「新しい水着…似合うかな？」_121084503_p0.avif',
  'シロ９じら_スケブ納品物410_132819105_p0.avif',
  'シロ９じら_スケブ納品物452_132819118_p0.avif',
  'たにし_白上のお膝で寝たいの？_125303459_p0.avif',
  'ちょみます_♡_116042604_p3.avif',
  'ちょみます_skeb_108773635_p0.avif',
  'ちょみます_skeb_118744829_p0.avif',
  'はすね_Ribbon_116301199_p0.avif',
  'はみこ@お仕事募集中_わたしのお気に入り_131234333_p0.avif',
  'はるひるり_時計塔のお茶会_124989912_p0.avif',
  'ふかみみ@ご依頼受付中_White Christmas_125531112_p0.avif',
  'ふかみみ@ご依頼受付中_いちご大福ちゃん_117893571_p0.avif',
  'ほうき星_聖園 ミカ_134876365_p0.avif',
  'ほし_Salty Dog_92197294_p0.avif',
  'まふゆ_♡_124484641_p0.avif',
  'まふゆ_朝の身支度_125339686_p0.avif',
  'ももこ_博衣こより_102712859_p0.avif',
  'ももこ_踊り子ちゃん_102677733_p0.avif',
  'ももこ_ひよりちゃん_105681985_p0.avif',
  'ももこ_ほへとちゃん_107429786_p0.avif',
  'ゆぅ_やっぱ暑い。。。_132522380_p0.avif',
  'リン☆ユウ＠新刊通販委託中_ヘルタ_117946357_p0.avif',
  'るび様＠日曜Youtube更新_黒ベビードールクロエちゃん_108230856_p0.avif',
  'るび様＠日曜Youtube更新_雨の日ロリータ_100356937_p0.avif',
];

function getRandomItem(items) {
  if (!items || items.length === 0) return null;
  var index = Math.floor(Math.random() * items.length);
  return items[index];
}

function buildImageUrl(type, filename) {
  if (!filename) return null;
  return '/img/' + type + '/' + encodeURIComponent(filename);
}

// 检测是否为移动设备
function isMobileDevice(userAgent) {
  if (!userAgent) return false;
  
  var mobileKeywords = [
    'Mobile', 'Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 
    'Windows Phone', 'Opera Mini', 'IEMobile', 'Mobile Safari',
    'webOS', 'Kindle', 'Silk', 'Fennec', 'Maemo', 'Tablet'
  ];
  
  var lowerUserAgent = userAgent.toLowerCase();
  
  // 检查移动设备关键词
  for (var i = 0; i < mobileKeywords.length; i++) {
    if (lowerUserAgent.includes(mobileKeywords[i].toLowerCase())) {
      return true;
    }
  }
  
  // 检查移动设备正则表达式
  var mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  return mobileRegex.test(userAgent);
}

async function handleRequest(request) {
  try {
    var url = new URL(request.url);
    var imgType = url.searchParams.get('img');

    if (imgType === 'h') {
      var filename = getRandomItem(horizontalImages);
      var imageUrl = buildImageUrl('h', filename);
      
      if (!imageUrl) {
        return new Response('❌ 横屏图片列表为空，请在 functions/image.js 中配置文件名。', {
          status: 500,
          headers: { 
            'Content-Type': 'text/plain; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
      
      // 返回重定向
      return new Response(null, {
        status: 302,
        headers: {
          'Location': imageUrl,
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else if (imgType === 'v') {
      var filename = getRandomItem(verticalImages);
      var imageUrl = buildImageUrl('v', filename);
      
      if (!imageUrl) {
        return new Response('❌ 竖屏图片列表为空，请在 functions/image.js 中配置文件名。', {
          status: 500,
          headers: { 
            'Content-Type': 'text/plain; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
      
      // 返回重定向
      return new Response(null, {
        status: 302,
        headers: {
          'Location': imageUrl,
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else if (imgType === 'ua') {
      // 根据User-Agent检测设备类型
      var userAgent = request.headers.get('User-Agent') || '';
      var isMobile = isMobileDevice(userAgent);
      
      if (isMobile) {
        // 移动设备，返回竖屏图片
        var filename = getRandomItem(verticalImages);
        var imageUrl = buildImageUrl('v', filename);
        
        if (!imageUrl) {
          return new Response('❌ 竖屏图片列表为空，请在 functions/image.js 中配置文件名。', {
            status: 500,
            headers: { 
              'Content-Type': 'text/plain; charset=utf-8',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
        
        return new Response(null, {
          status: 302,
          headers: {
            'Location': imageUrl,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } else {
        // 桌面设备，返回横屏图片
        var filename = getRandomItem(horizontalImages);
        var imageUrl = buildImageUrl('h', filename);
        
        if (!imageUrl) {
          return new Response('❌ 横屏图片列表为空，请在 functions/image.js 中配置文件名。', {
            status: 500,
            headers: { 
              'Content-Type': 'text/plain; charset=utf-8',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
        
        return new Response(null, {
          status: 302,
          headers: {
            'Location': imageUrl,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    } else {
      // 显示使用说明
      var helpText = '🖼️ 随机图片展示器\n\n';
      helpText += '使用方法:\n';
      helpText += '• ?img=h - 获取横屏随机图片\n';
      helpText += '• ?img=v - 获取竖屏随机图片\n';
      helpText += '• ?img=ua - 根据设备类型自动选择图片\n';
      helpText += '\n';
      helpText += '图片目录:\n';
      helpText += '• /img/h (横屏)\n';
      helpText += '• /img/v (竖屏)\n';
      
      return new Response(helpText, {
        status: 200,
        headers: { 
          'Content-Type': 'text/plain; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

  } catch (error) {
    var errorDetails = '❌ 内部错误\n\n';
    errorDetails += '错误消息: ' + error.message + '\n';
    errorDetails += '错误堆栈: ' + error.stack + '\n';
    errorDetails += '请求地址: ' + request.url + '\n';
    errorDetails += '时间戳: ' + new Date().toISOString();
    
    return new Response(errorDetails, {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}
