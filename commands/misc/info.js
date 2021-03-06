const Command = require('../../util/Command.js')
const { description, version, repository, homepage, dependencies } = require('../../package.json')
const { MessageEmbed } = require('discord.js')

class Info extends Command {
  constructor () {
    super({
      name: 'info',
      description: 'Get information about the bot.'
    })
  }

  async run (message, args) {
    const embed = new MessageEmbed()
      .setColor(process.env.EMBED_COLOR)
      .setTitle(message.client.user.username)
      .setURL(homepage)
      .setDescription(description)
      .setThumbnail(message.client.user.avatarURL())
      .addField('Invite', `[Click to invite](${message.client.meta.get('invite')})`, true)
      .addField('Repository', `[Click to view](${repository.url})`, true)
      .addField('Bot Version', `v${version}`, true)
      .addField('NodeJS Version', process.version, true)
      .addField('discord.js Version', `v${dependencies['discord.js'].replace('^', '')}`, true)

    message.channel.send(embed)
  }
}

module.exports = Info
