

// For now, the only available property is name array. Not making the name array will result in an error.

/**
 * @type {import('../../typings').TriggerCommand}
 */
module.exports = {
	name: ["What's Good""What's Up"],

	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.

		message.channel.send({
			content: "This message was sent by saying `What's Good`. Keep up the talking!`",
		});
	},
};
