from fileinput import close
from logging import exception
import os
from pickle import FALSE, TRUE
from turtle import delay
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
import pyautogui

import os 
cwd = os.getcwd()



PATH = input("Please, supply Chromedriver direction: ")
PAGE = input("Please, supply Amazon department direction: ") 
USERDATA = input("Please, supply User Data Folder direction: ") 


options = webdriver.ChromeOptions()
options.add_argument(r"--user-data-dir="+USERDATA)
options.add_argument(r"--profile-directory=Default")
driver = webdriver.Chrome(executable_path=PATH, options=options)
driver.get(PAGE)


i = TRUE
j = TRUE
k = TRUE

# Include a loop until last page is reached
while i == TRUE:

    j = TRUE;
    k = TRUE;

    # Wait for extension to load the data
    time.sleep(35);

    # Wait until button is available
    while j == TRUE:
        try:            
            driver.find_element(By.XPATH,'//*[@id="smart-scout-view"]/div[1]/div[4]/div[1]/div[3]/button')
        except NoSuchElementException :
            j = TRUE
            time.sleep(35)
        else :
            j = FALSE

    # Wait until CSV is available
    time.sleep(15)

    # Click on Export to CSV
    driver.find_element(By.XPATH,'//*[@id="smart-scout-view"]/div[1]/div[4]/div[1]/div[3]/button').click()
    
    time.sleep(3)
    
    # Press ENTER to save file on default folder
    pyautogui.press('enter')
    
    time.sleep(10)

    try:
        #driver.find_element(By.XPATH,r'/html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[53]/div/div/span/a[2]')
        driver.find_element(By.LINK_TEXT,r'Next')
    except NoSuchElementException :
        i = FALSE
        driver.quit()
            

   
    # Press NEXT to reach next page
    driver.find_element(By.LINK_TEXT,r'Next').click()
    time.sleep(15)
    driver.refresh()

