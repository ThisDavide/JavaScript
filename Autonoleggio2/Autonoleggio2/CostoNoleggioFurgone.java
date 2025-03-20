public class CostoNoleggioFurgone {
    private double capSerb;

    public CostoNoleggioFurgone(double capacitaSerbatoio){
        this.capSerb = capacitaSerbatoio;
    }
    public double costoNoleggioFurgone(int kmPercorsi, double litriNelserbatoio, int nGiorni){
        return 70 * nGiorni + 1 * ((kmPercorsi - 100)/30) + 2 * (capSerb - litriNelserbatoio);
    }
}
