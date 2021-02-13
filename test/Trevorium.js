var Trevorium = artifacts.require("./Trevorium.sol");

contract('Trevorium', function(accounts) {
	
	it('initializes contract with correct values', function() {
		return Trevorium.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.name();
		}).then(function(name) {
			assert.equal(name, 'Trevorium', 'sets correct name');
			return tokenInstance.symbol();
		}).then(function(symbol) {
			assert.equal(symbol, 'TREV', 'sets correct symbol');
		});
	});



	it('sets total supply on deploment', function() {
		return Trevorium.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 1000000, 'sets total supply to 1,000,000');
		});
	});

	it('allocates initial supply to admin account', function() {
		return Trevorium.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.balanceOf(accounts[0]);
		}).then(function(adminBalance) { 
			assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
		});
	});

})
