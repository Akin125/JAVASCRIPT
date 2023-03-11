#include <stdio.h>

int main (void){
      printf("Good");

     for(int i = 1; i <=100; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
         printf("FuzzBuzz\n");
        }
        else if(i % 3 == 0){
            printf("Fuzz\n");
        }
        else if(i % 5 == 0){
             printf("Buzz\n");
        }
        else{
             printf("%i\n", i);
        }
     }
}