# test on basic arithmetic and math function
2*exp(3)
# import libraries
library("Seurat")
library(ggplot2)
library(tidyverse)
library(dplyr)
library(palmerpenguins)
library(skimr)
library(ggmosaic)
# import data
data(airquality)
data(penguins)
# Structure of the table
head(airquality)
# Structure of the data table
str(airquality)

# Réalisation d'un graphique présentant la relation entre la concentration
# en ozone atmosphérique en ppb et la température en degrés Farenheit
ggplot(data = airquality, mapping = aes(x = Temp, y = Ozone)) + geom_point() + geom_smooth(method = "loess")

View(penguins)
glimpse(penguins)
