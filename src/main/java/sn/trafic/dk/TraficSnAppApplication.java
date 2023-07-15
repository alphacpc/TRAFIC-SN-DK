package sn.trafic.dk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
public class TraficSnAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TraficSnAppApplication.class, args);
	}
	
	@GetMapping("/me")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }
}
