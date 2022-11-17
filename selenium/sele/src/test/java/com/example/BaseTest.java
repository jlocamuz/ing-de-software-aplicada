package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class BaseTest {
    public WebDriver driver;

    @BeforeClass
    public static void setDriver() {
    }

    @Before
    public void setup() {
        driver = new ChromeDriver();
    }

    @After
    public void quit() {
        driver.quit();
    }
}