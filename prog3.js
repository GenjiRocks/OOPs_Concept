// methods for solving the given questions

class Bank{
    accountDetails = {
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}
    }

    validate(accno){
        if(accno in this.accountDetails){
              return  console.log(`Account no is present`);
            }
            else{
             return   console.log(`Account no not present`);
            }
        }

        // Authenticating the bank account
    authenticate(accno,pass){
        // console.log(this.accountDetails);

         for (let i in this.accountDetails) {
            if (this.accountDetails[i].acno == accno && this.accountDetails[i].password == pass) {
                console.log(`Authentication passed`);
                return; // Exit the loop if authentication is successful
            }
        }
        console.log(`Authentication failed`);
        } 

        // Calculating the balance
        calbalance(accno){
            if(accno in this.accountDetails){
                console.log(this.accountDetails[accno].balance);
            }

            else{
                console.log(`Account no not found`);
            }
        }


    }

    


// Validate a given account number

const obj = new Bank()
obj.validate(1002)

// Authenticate the account

obj.authenticate(1000,'userone')
// check the balance
obj.calbalance(1001)

// fund transfer