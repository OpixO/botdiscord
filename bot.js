const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] })
const { MessageActionRow, MessageButton } = require('discord.js');

const { exec } = require('child_process');
var spawn = require("child_process").spawn,child;

disbut = require('discord-buttons');

disbut(client);


client.on('ready', function () {
  console.log("Je suis connecté !")
})


client.on("message", message => {
    if (message.content === "=help") {
        message.channel.send("> S'il y a besoin de commandes supplémentaire, vous pouvez envoyer un message à **<@235449788697411587>**")
   
        message.channel.send("----------------------------------") 
        message.channel.send("> ping -> pour connaitre ton ping")  
        message.channel.send("> Lol Pseudo -> pour avoir le détail de ta partie") 
        message.channel.send("> purge Nombre -> pour supprimer les dernier message") 
        message.channel.send("> proj -> pour les liens utiles du proj") 



        
    }

    if (message.content === "=ping"){
        
        message.channel.send(`🏓**Pong !** Mon propre ping perso c'est **${Math.round(client.ws.ping)}ms**`);
    }


    if (message.content.includes("yahou") || message.content.includes("Yahou")){
        message.channel.send("On m'a appelé ?")
    }

    if (message.content.includes("=LoL")){

      let messageArray = message.content.split(" ");
      let args = messageArray.slice(1);
      
      let Button = new disbut.MessageButton()
      .setStyle('url') //default: blurple
      .setLabel('OP.GG') //default: NO_LABEL_PROVIDED
      .setID("") //note: if you use the style "url" you must provide url using .setURL('https://example.com')
      .setURL("https://euw.op.gg/summoners/euw/"+args+"/ingame")

      let Button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('PROBUILDS')
      .setID("")
      .setURL("https://www.probuilds.net/")

      message.channel.send('Voici les liens utiles pour ta game : ', {buttons : [  Button , Button2 ]});
    }

    if (message.content.startsWith("=purge")){
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let amount = args.slice(0).join(" ");
    
        if (amount < 0) {
          message.channel.send("Impossible de supprimer des messages qui n'existent pas!");
        } else if (amount > 100) {
          message.channel.send("Impossible de supprimer plus de 100 message voyons !");
        } else {
          try{
            message.channel.bulkDelete(amount, true);
            message.channel.send(`Et voila : ${amount} messages supprimés !`);
          }catch{
            message.channel.send("Impossible de supprimer des messages vieux de plus de 2 semaines.");
          }
          
        }
    }

    if (message.content.startsWith("=proj")){
      let Button = new disbut.MessageButton()
      .setStyle('url') //default: blurple
      .setLabel('demarretonprojet') //default: NO_LABEL_PROVIDED
      .setID("") //note: if you use the style "url" you must provide url using .setURL('https://example.com')
      .setURL("https://demarretonprojet.fr/inprogress/")

      let Button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Github')
      .setID("")
      .setURL("https://github.com/Florent18570/demarretonprojet/")

      message.channel.send('Voici les liens utiles du projet web : ', {buttons : [  Button , Button2 ]}); 
    }

    if (message.content.startsWith("=forceUpdate")){
      var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",["C:\\distance\\script.ps1"]);
child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
});
child.on("exit",function(){
    console.log("Powershell Script finished");
});
child.stdin.end(); 
    
      message.channel.send("Site Actualisé")
    }

    if (message.content.includes("Florent18570")){
      message.channel.send("oublie pas de pull OpixO")
    }

    if (message.content.includes("OpixO")){
      message.channel.send("oublie pas de pull xixulo")
    }


    

  });

  




  

client.login("OTU0MzU2Njc5NDQzNjI0MDA3.YjR76w.I0sruxz2yaCr-TLwN3TMpS3wFiQ")



