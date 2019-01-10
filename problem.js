public class problem {

    public static void fizzBuzz(){
        //This must print 1-100 in the console
        //If divisible by 3, print fizz
        //If divisible by 5, print buzz
        //If divisible by 3 and 5, print fizzbuzz
        //Else, print the number
        
        int i;
         
        for(i=28;i<=100;i++){
        
            if(i % 3 == 0){
                if (i % 3 == 0 && i % 5 == 0) {
                   System.out.println("fizzbuzz");
                }
                else {
                   System.out.println("fizz");
                }
            }
            else if(i % 5 == 0){
            
                System.out.println("buzz");
            }
            else{
                System.out.println(i);
            }
        }
    }
    
    public static void main(String[] args) {

    fizzBuzz();

    }
}
    