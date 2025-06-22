public class FinancialForecast 
{
    public static double forecast(double initial, double rate, int years) {
        if (years == 0) //Base case 
        {
            return initial;
        }

        // Recursive case: FV(n) = FV(n-1) * (1 + rate)
        return forecast(initial, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) 
    {
        double initialAmount = 10000;   
        double growthRate = 0.18;        
        int forecastYears = 6;           
        double result = forecast(initialAmount, growthRate, forecastYears);
        System.out.printf("Future Value after %d years: Rs.%.2f%n", forecastYears, result);
    }
}


