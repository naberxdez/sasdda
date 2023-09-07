

const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    //Oyuncular Şehri - ArdaDemr;
    //Gerekli komutları sizin doldurmanız gerek

var page = 0;

let arr = [];
let emojiarr = message.guild.emojis.cache.array();
for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/10)*10 +1); ++i) {
var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+10)
arr.push(on.toString())
}

let embd = new Discord.MessageEmbed()
message.channel.send(embd.setDescription(arr[0]).setDescription('NuttyNuke Yardım Menüsüne Hoşgeldiniz! Sayfaları Değiştirerek Kodları Görebilirsiniz.')).then(async msg => {
      await msg.react("⬅️");
      await msg.react("➡️");

      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "⬅️":
            reaction.users.remove(user).catch(console.error);
            if (page == 0) return;
            --page

              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("n!koruma | Koruma Sistemleri Hakkında Bilgi Verir.\nn!kayıt | Kayıt Sistemi Hakkında Bilgi Verir.\n!eğlence | Eğlence Sistemleri Hakkında Bilgi Verir.")
            msg.edit(embd)
           break;
          case "➡️":
            if (page == arr.length) return;
            ++page
            if(page==1){
                reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("n!panel aç/kapat | Sunucunuza İstatistik Paneli Kurar.\nn!yönetim | Yönetim Ekibi Hakkında Bilgi Verir.")
            msg.edit(embd)
            }
           
            if(page==2){
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("Kod Denemeaas")
            msg.edit(embd)
            }
          break;
           
             
        }
      });
    })
}
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["oyuncularsehriardademr", "oyuncularsehri"],
        permLevel: 0
      };
   
      exports.help = {
        name: "e",
        description: "Sayfalı Yardım Menüsü -ArdaDemr",
        usage: "Sayfalı Yardım Menüsü"
}
