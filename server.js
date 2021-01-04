const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "NzU2MjU1MjU2MzAzNzYzNDk2.X2PLlw.fyTLeGC3wWBANPBrBSGdZEs7c", 
prefix: "k!" 
})

bot.onMessage()
//commands

bot.command({
name: "ping", 
code:`Şuanlık Pingim= **$ping**` 
})

bot.command({
name: "döviz", 
code: `$title[<:koyun_samani:794325598846844959>Döviz Sistemi<:koyun_samani:794325598846844959>]
$description[
1 Saman= 2,43 Euro 
1 Saman= 3 Dolar
1 Saman= 22,32 Lira
1 Saman= 0.1014545455 Balya
1 Saman= 0.24 Mama
1 Saman= 255,38 Arjantin Pesosu]
$footer[Koyunistan]
$color[00ff00]
$addReactions[<:koyun_samani:794325598846844959>]
`
})

bot.command({
name: "döviz-ayarla", 
code: `$title[<:koyun_samani:794325598846844959>Döviz Sistemi<:koyun_samani:794325598846844959>]
$description[
$noMentionMessage[1] Saman= $multi[$noMentionMessage[1];2.43] Euro 
$noMentionMessage[1] Saman= $multi[$noMentionMessage[1];3] Dolar
$noMentionMessage[1] Saman= $multi[$noMentionMessage[1];22.32] Lira
$noMentionMessage[1] Saman= $multi[$noMentionMessage[1];0.1014545455] Balya
$noMentionMessage[1] Saman= $multi[$noMentionMessage[1];0.24] Mama
$noMentionMessage[1] Saman= $multi[$noMentionMessage[1];255.38] Arjantin Pesosu]
$footer[Koyunistan]
$color[00ff00]
$addReactions[<:koyun_samani:794325598846844959>]
$onlyIf[$noMentionMessage[1]!=;Bir Sayı Yazmalısın]
`
})

bot.command({
  name:"envanter",
  code: `$title[<:koyun_samani:794325598846844959>Döviz Sistemi<:koyun_samani:794325598846844959>]
  $description[<@$authorID> Envanterin=
  **$getUserVar[saman]** Saman
  **$getUserVar[euro]** Euro
  **$getUserVar[dolar]** Dolar
  **$getUserVar[tl]** Lira
  **$getUserVar[balya]** Balya
  **$getUserVar[mama]** Mama
  **$getUserVar[arjantinpesosu]** Arjantin Pesosu]
  $footer[Koyunistan]
  $color[00ff00]
  `
})

bot.command({
  name:"çalış",
  code: `$globalCooldown[5s;**5 Saniye Dinlenmelisin**]
$title[<:koyun_saman:794325598846844959>Döviz Sistemi<:koyun_saman:794325598846844959>]
$description[Çalışdın Ve **$random[1;5]** Saman Kazandın!!]
$footer[Koyunistan]
$color[00ff00]
$setUserVar[saman;$sum[$getUserVar[saman];$random[1;5]]]
`
})

bot.command({
  name:"haber-gönder",
  code: `$deletecommand
$useChannel[794066259498893314]
$title[Koyunistan Haberleri!!]
$description[
Haber: **$noMentionMessage**
Haberi Gönderen: <@$authorID>
Haber Sevildimi Yoksa Sevilmedi Mi: 👍, 👎
Haberin Gönderildiği Tarih:]
$addTimestamp
$addReactions[👍;👎]
$color[00ff00]
$onlyIf[$noMentionMessage!=;**Bir Haber Metni Girmelisin**]
$argsCheck[>1;**Bir Haber Metni Girmelisin**]
$onlyForRoles[Haberci;**Bu Komutu Kullanabilmek İçin __Haberci__ Rolün Sahip Olmalısın**]
$onlyForServers[793928115427606529;**Bu Komut Tek Koyunistan Ülkesinin Resmi Sunucusunda Bulunur Sunucuya Gitmek İçin __Ksunucu__ Yazmanız Yeter**]
`
})

bot.command({
  name:"ekonomi",
  aliasses: ['ekonomi-sistemi'],
  code: `$title[<:koyun_samani:794325598846844959>Döviz/Ekonomi Sistemi<:koyun_samani:794325598846844959>]
  $description[
  Markete Bakmak İçin= k!market
  Dövize Bakmak İçin= k!döviz
  Dövizdeki Saman Sayısını Ayarlamak İçin= k!döviz-ayarla <sayı>
  Çalışmak İçin= k!çalış
  Birisine Saman Göndermek İçin= k!saman-gönder <şahıs> <sayı>
  Envanterine Bakmak İçin= k!envanter
  Samanı Başka Para Birimine Dönüştürmek İçin= k!samanı-<dolara/euroya/liraya/balyaya/mamaya/arjantin-pesosuna>-dönüştür]
  $footer[Koyunistan]
  $color[00ff00]`
  })

bot.command({
  name:"market",
  code: `$title[<:koyun_samani:794325598846844959>Döviz/Ekonomi Market<:koyun_samani:794325598846844959>]
  $description[1500 Saman - Parti Kurma: k!parti-kur]
  $footer[Koyunistan]
  $color[00ff00]`
})

bot.command({
  name:"parti-kur",
  code: `$title[<:koyun_samani:794325598846844959>Market Sistemi<:koyun_samani:794325598846844959>]
$description[<@$authorID> Bir Partinin Nasıl Kurulacağı <#794606956731826246> Kanalında Yazmaktadır]
$footer[Koyunistan]
$color[00ff00]
$onlyForServers[793928115427606529;**Bu Komut Tek Koyunistan Ülkesinin Resmi Sunucusunda Bulunur Sunucuya Gitmek İçin __Ksunucu__ Yazmanız Yeter**]
  `
})

bot.command({
  name:"yardım",
  aliases: ["help", "meğ", "möö", "miyav"],
  code: `$title[Koyunistan Yardım Komutu]
  $description[Döviz/Ekonomi Sistemi İçin= k!ekonomi]
  $footer[Koyunistan]
  $color[00ff00]`
})

bot.command({
  name:"31",
  nonPrefixed: true,
  aliases: ["3 1", "üç ve bir", "otuzbir", "otuz bir"],
  code: `🤣
  $addReactions[🍆;🍑]`
})

bot.joinCommand({
        channel: "794892491840552960", 
        code: `$username just joined, welcome!`
})
bot.onJoined()

bot.command({
  name:"saman-gönder",
  code: `$setUserVar[saman;$sum[$getUserVar[saman;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setUserVar[saman;$sub[$getUserVar[saman];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[saman];Samanından Daha Fazlasını Gönderemezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Saman Gönderemezsin!!]
$footer[Koyunistan]
$color[00ff00]
$allowMention
$title[Saman Gönderimi Başarılı!]
$description[<@$mentioned[1]> Üyeye Verdiğin Saman:**$noMentionMessage** <:koyun_samani:794325598846844959>]`
})

bot.command({
  name:"samanı-dolara-dönüştür",
  code: `$setUserVar[dolar;$multi[$noMentionMessage;3];$authorID]                                                                                                      
$setUserVar[saman;$sub[$getUserVar[saman];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[saman];Samanından Daha Fazlasını Dolara Dönüştüremezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Samanı Dolara Dönüştüremezsin!!]
$title[Samanı Dolara Dönüştürme Başarılı!!]
$description[**$noMentionMessage** Adet Samanın Gitti **$multi[$noMentionMessage;3]** Adet Dolar Geldi!!]
$footer[Koyunistan]
$color[00ff00]`
})

bot.command({
  name:"samanı-euroya-dönüştür",
  code: `$setUserVar[euro;$multi[$noMentionMessage;2.43];$authorID]                                                                                                      
$setUserVar[saman;$sub[$getUserVar[saman];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[saman];Samanından Daha Fazlasını Euroya Dönüştüremezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Samanı Euroya Dönüştüremezsin!!]
$title[Samanı Euroya Dönüştürme Başarılı!!]
$description[**$noMentionMessage** Adet Samanın Gitti **$multi[$noMentionMessage;2.43]** Adet Euro Geldi!!]
$footer[Koyunistan]
$color[00ff00]`
})

bot.command({
  name:"samanı-liraya-dönüştür",
  code: `$setUserVar[tl;$multi[$noMentionMessage;22.32];$authorID]                                                                                                      
$setUserVar[saman;$sub[$getUserVar[saman];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[saman];Samanından Daha Fazlasını Liraya Dönüştüremezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Samanı Liraya Dönüştüremezsin!!]
$title[Samanı Liraya Dönüştürme Başarılı!!]
$description[**$noMentionMessage** Adet Samanın Gitti **$multi[$noMentionMessage;22.32]** Adet Lira Geldi!!]
$footer[Koyunistan]
$color[00ff00]`
})

bot.command({
  name:"samanı-balyaya-dönüştür",
  code: `$setUserVar[balya;$multi[$noMentionMessage;0.1014545455];$authorID]                                                                                                      
$setUserVar[saman;$sub[$getUserVar[saman];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[saman];Samanından Daha Fazlasını Balyaya Dönüştüremezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Samanı Balyaya Dönüştüremezsin!!]
$title[Samanı Balyaya Dönüştürme Başarılı!!]
$description[**$noMentionMessage** Adet Samanın Gitti **$multi[$noMentionMessage;0.1014545455]** Adet Balya Geldi!!]
$footer[Koyunistan]
$color[00ff00]`
})

bot.command({
  name:"samanı-mamaya-dönüştür",
  code: `$setUserVar[mama;$multi[$noMentionMessage;0.24];$authorID]                                                                                                      
$setUserVar[saman;$sub[$getUserVar[saman];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[saman];Samanından Daha Fazlasını Mamaya Dönüştüremezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Samanı Mamaya Dönüştüremezsin!!]
$title[Samanı Mamaya Dönüştürme Başarılı!!]
$description[**$noMentionMessage** Adet Samanın Gitti **$multi[$noMentionMessage;0.24]** Adet Mama Geldi!!]
$footer[Koyunistan]
$color[00ff00]`
})

bot.command({
  name:"samanı-arjantin-pesosuna-dönüştür",
  code: `$setUserVar[arjantinpesosu;$multi[$noMentionMessage;255.38];$authorID]                                                                                                      
$setUserVar[saman;$sub[$getUserVar[saman];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[saman];Samanından Daha Fazlasını Arjantin Pesosu Dönüştüremezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Samanı Arjantin Pesosuna Dönüştüremezsin!!]
$title[Samanı Arjantin Pesosuna Dönüştürme Başarılı!!]
$description[**$noMentionMessage** Adet Samanın Gitti **$multi[$noMentionMessage;255.38]** Adet Arjantin Pesosu Geldi!!]
$footer[Koyunistan]
$color[00ff00]`
})

bot.command({
  name:"doları-samana-dönüştür",
  code: `$setUserVar[saman;$divide[$noMentionMessage;3];$authorID]                                                                                                      
$setUserVar[dolar;$sub[$getUserVar[dolar];$noMentionMessage]]
$onlyIf[$noMentionMessage<$getUserVar[dolar];Dolarından Daha Fazlasını Samana Dönüştüremezsin!!]
$onlyIf[$noMentionMessage>0;0 Dan Az Doları Samana Dönüştüremezsin!!]
$title[Doları Samana Dönüştürme Başarılı!!]
$description[**$noMentionMessage** Adet Dolar Gitti **$divide[$noMentionMessage;3]** Adet Saman Geldi!!]
$footer[Koyunistan]
$color[00ff00]`
})

bot.command({
  name:"random-koyun-ismi",
  code: `$$changeNickname[$authorID;Koyun/$randomText[Meeğ;Meağ;Meağe;Meeeğğğ;Meğğ;Meeğ Meağe]]
$title[✔Random Koyun İsmi✔]
$description[İsmin Başarıyla Random Koyun İsmi Oldu.]
$footer[Koyunistan]
$color[00ff00]`
})


//status

bot.status({
  text: "Koyunistan Resmi Botu Çalışıyor",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Koyunistan Resmi Discord: https://discord.gg/CS9G6KB9",
  type: "PLAYING",
  status: "dnd",
  time: 12
})

//Read more information about status in docs:
//https://dbd.leref.ga/guide/bot-status

//variables

bot.variables({
    saman: "0",
    tl: "0",
   dolar: "0",
   euro: "0",
  balya: "0",
  mama: "0",
  arjantinpesosu: "0"
  })


//You can add more variables :)
//Join our Support Server & read Documentation for help :)
