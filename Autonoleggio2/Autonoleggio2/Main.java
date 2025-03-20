public class Main {
    public static void main(String[] args) {
        Vettura v1 = new Vettura(2007, 100, 1200, "Fiat", "Panda", 23, "JKH789", 5);
        CostoNoleggioVettura csv1 = new CostoNoleggioVettura(100);
        Furgone f1 = new Furgone(2000, 120, 2500, "Fiat", "fiorino",33, "HGH6778", 1000);
        CostoNoleggioFurgone csf1 = new CostoNoleggioFurgone(200);

        Autonoleggio a = new Autonoleggio();

        a.addVeicolo(v1);
        a.addVeicolo(f1);

        System.out.println(csv1.costoNoleggioVettura(200, 20, 3)); 
        System.out.println(csf1.costoNoleggioFurgone(245, 19, 4)); 

    }
}
