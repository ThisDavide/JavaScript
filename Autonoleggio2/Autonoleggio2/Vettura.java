public class Vettura extends Veicolo{
    private int nPosti;

    public Vettura(int annoDiAcquisto, double capacitaSerbatoio, double cilindrata, String marca, String modello, int nMatricola, String targa, int nPosti){
        super(annoDiAcquisto, capacitaSerbatoio, cilindrata, marca, modello, nMatricola, targa);
        this.nPosti = nPosti;
    }

    public int getnPosti() {
        return nPosti;
    }

    public void setnPosti(int nPosti) {
        this.nPosti = nPosti;
    }

    @Override
    public String toString() {
        return super.toString() + " numero posti:" + nPosti;
    }  
}
