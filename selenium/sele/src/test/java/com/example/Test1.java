package com.example;

import java.util.List;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.junit.Assert.assertTrue;

public class Test1 {
    @Test
    public void biblioteca() {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver"); //establezco driver 
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.um.edu.ar/biblio/");
        driver.manage().window().setSize(new Dimension(1024, 743));
        WebElement search_box = driver.findElement(By.name("busqueda"));
        search_box.click();
        search_box.sendKeys("Ingenieria de software pressman");
        search_box.sendKeys(Keys.ENTER);
        List<WebElement> tabla = driver.findElements(By.xpath("/html/body/div[4]/div[3]/div[1]/div/div[3]/table/tbody/tr"));
        assertTrue(tabla.size() > 1); // de 1 pq la primer fila es de titulo 
        driver.quit(); // Cierra el navegador

    }

}
