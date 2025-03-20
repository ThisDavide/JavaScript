public class CostoNoleggioVettura{
    private double capSerb;

    public CostoNoleggioVettura(double capacitaSerbatoio){
        this.capSerb = capacitaSerbatoio;
    }

    public double costoNoleggioVettura(int kmPercorsi, double litriNelserbatoio, int nGiorni){
        return 50 * nGiorni + 1 * (kmPercorsi / 25)  + 2 * (capSerb - litriNelserbatoio);
    }
}