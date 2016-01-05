Sigma - Mobile
==============

## Installation
Il est nécessaire de désinstaller Ionic et Cordova si ceux-ci sont déjà installés.
```
sudo npm uninstall -g cordova
sudo npm uninstall -g ionic
```
On installe ensuite la dernière bêta d'Ionic et la dernière version de Cordova, et enfin les dépendances du projet.
```
sudo npm install -g ionic@beta
sudo npm install -g cordova

npm install
```

## Développement
Pour travailler dans votre navigateur :
```
ionic serve
```

## Compilation pour téléphone
```
ionic platform add ios
ionic build
```
