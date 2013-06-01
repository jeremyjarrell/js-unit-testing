describe("When opening a bank account", function() {
	
	it("should accept an opening deposit", function() {

		var account = new BankAccount(10);
		expect(account.balance).toBe(10);
	});
});