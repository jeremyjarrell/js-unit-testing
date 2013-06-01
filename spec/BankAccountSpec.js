describe("When opening a bank account", function() {
	
	it("should accept an opening deposit", function() {

		var account = new BankAccount(10);
		expect(account.balance).toBe(10);
	});
});

describe("When depositing funds into a bank account", function() {

	it("should credit that amount against the balance", function() {

		var account = new BankAccount(10);
		account.deposit(5);

		expect(account.balance).toBe(15);
	});
});