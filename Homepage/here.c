#include<stdio.h>
int main(){
    int math, phyc, hist, total;
    float avr;
    printf("Enter your marks in:");
    printf("Math\n");
    scanf("%d", &math);
    printf("Physics\n");
    scanf("%d", &phyc);
    printf("History\n");
    scanf("%d", &hist);

    total = math + phyc + hist;
    avr = total / 3;

    printf("Your total is %d and average is %.2f", total, avr);    
return 0;
}