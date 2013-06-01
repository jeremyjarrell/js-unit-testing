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

describe("When withdrawing funds from a bank account", function() {

	it("should deduct that amount from my balance", function() {

		var account = new BankAccount(10);
		account.withdraw(7);

		expect(account.balance).toBe(3);
	});

	it("should throw an error when I try to withdraw an amount more than my balance", function() {

		var account = new BankAccount(10);
		

		expect(function() { account.withdraw(15); }).toThrow(new Error("Insufficient Funds"));
	});
});