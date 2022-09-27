const main = async () => {
	const [deployer] = await hre.ethers.getSigners();
	const contractFactory = await hre.ethers.getContractFactory('Mooncake');
	const contract = await contractFactory.deploy();
	await contract.deployed();
	console.log('Contract deployed to:', contract.address);

	let txn = await contract.mint(deployer, 1e20);

	await txn.wait();

	console.log(txn);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();
