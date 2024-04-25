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

    authenticate(accno,pass){
        // console.log(this.accountDetails);

         for(let i=0;i<this.accountDetails.length;i++){
            console.log(i);
            console.log(`abcd`);
             if( this.accountDetails[i].acno == accno && this.accountDetails[i].password==pass){
                console.log(`Authentications passed`);
            }
            else{
                console.log(`Authentication Failed`);
            } 
        }
        } 

      
    }



    


// Validate a given account number

const obj = new Bank()
obj.validate(1005)

// Authenticate the account

obj.authenticate(1000,'userone')
// check the balance

// fund transfer