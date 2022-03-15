import readline from 'readline';
import { Client } from 'envato';
import dotenv from 'dotenv';

dotenv.config();

// Add your personal token
const client = new Client(process.env.PERSONAL_TOKEN);

// Example usage
async function getPurchaseCode(code) {
	try {
		const sale = await client.private.getSale(code);

		if (sale !== undefined) {
			console.log({
				item: sale.item.name,
				buyer: sale.buyer,
				license: sale.license,
				supportedUntil: sale.supported_until,
				supportedNow: sale.supported_until > new Date() ? 'Yes' : 'No'
			});
		}
		else {
			console.error('Invalid purchase code!');
		}
	}
	catch (error) {
		// Your code should only reach this point due to a server error,
		// an outage, or an invalid token
		console.error('Caught an exception:', error);
	}
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter purchase code: ', async function (code) {
	await getPurchaseCode(code);
	rl.close();
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});