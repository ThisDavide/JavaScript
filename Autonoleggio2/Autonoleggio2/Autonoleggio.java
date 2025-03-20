import java.util.ArrayList;

public class Autonoleggio {
    private ArrayList<Veicolo> autonoleggio;

    public Autonoleggio(){
        this.autonoleggio = new ArrayList<>();
    }

    public ArrayList<Veicolo> getAutonoleggio() {
        return autonoleggio;
    }

    public void setAutonoleggio(ArrayList<Veicolo> autonoleggio) {
        this.autonoleggio = autonoleggio;
    }

    @Override
    public String toString() {
        return "autonoleggio: " + autonoleggio;
    }

    public void addVeicolo(Veicolo v){
        autonoleggio.add(v);
    }

    public void removeVeicolo(Veicolo v){
        autonoleggio.remove(v);
    }
}
