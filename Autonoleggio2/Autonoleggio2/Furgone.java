public class Furgone extends Veicolo{
    private double capacitaDiCarico;

    public Furgone(int annoDiAcquisto, double capacitaSerbatoio, double cilindrata, String marca, String modello, int nMatricola, String targa, double capacitaDiCarico){
        super(annoDiAcquisto, capacitaSerbatoio, cilindrata, marca, modello, nMatricola, targa);
        this.capacitaDiCarico = capacitaDiCarico;
    }

    public double getCapacitaDiCarico() {
        return capacitaDiCarico;
    }

    public void setCapacitaDiCarico(double capacitaDiCarico) {
        this.capacitaDiCarico = capacitaDiCarico;
    }

    @Override
    public String toString(){
        return super.toString() + " capacità di carico: " + capacitaDiCarico;
    }
}
