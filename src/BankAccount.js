function BankAccount (amount) {
	this.balance = amount;
}

BankAccount.prototype.deposit = function(amount) {
	this.balance += amount;
};