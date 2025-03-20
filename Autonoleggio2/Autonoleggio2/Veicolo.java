
public abstract class Veicolo{
    private String targa;
    private int nMatricola;
    private String marca;
    private String modello;
    private double cilindrata;
    private int annoDiAcquisto;
    protected double capacitaSerbatoio;

    public Veicolo(int annoDiAcquisto, double capacitaSerbatoio, double cilindrata, String marca, String modello, int nMatricola, String targa) {
        this.annoDiAcquisto = annoDiAcquisto;
        this.capacitaSerbatoio = capacitaSerbatoio;
        this.cilindrata = cilindrata;
        this.marca = marca;
        this.modello = modello;
        this.nMatricola = nMatricola;
        this.targa = targa;
    }

    public String getTarga() {
        return targa;
    }

    public void setTarga(String targa) {
        this.targa = targa;
    }

    public int getnMatricola() {
        return nMatricola;
    }

    public void setnMatricola(int nMatricola) {
        this.nMatricola = nMatricola;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModello() {
        return modello;
    }

    public void setModello(String modello) {
        this.modello = modello;
    }

    public double getCilindrata() {
        return cilindrata;
    }

    public void setCilindrata(double cilindrata) {
        this.cilindrata = cilindrata;
    }

    public int getAnnoDiAcquisto() {
        return annoDiAcquisto;
    }

    public void setAnnoDiAcquisto(int annoDiAcquisto) {
        this.annoDiAcquisto = annoDiAcquisto;
    }

    public double getCapacitaSerbatoio() {
        return capacitaSerbatoio;
    }

    public void setCapacitaSerbatoio(double capacitaSerbatoio) {
        this.capacitaSerbatoio = capacitaSerbatoio;
    }

    @Override
    public String toString(){
        return "Targa: " + targa + " numero matricola: " +nMatricola + " marca" + marca + " modello" + modello + " cilindrata" + cilindrata + " anno di acquisto" + annoDiAcquisto + " capacità serbatoio" + capacitaSerbatoio;
    }
}