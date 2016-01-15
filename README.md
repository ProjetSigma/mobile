Sigma - Mobile
==============

## Licence
<a href="https://github.com/ProjetSigma/mobile/blob/master/LICENSE.md">
<img src="https://img.shields.io/badge/license-GNU%20Affero%20General%20Public%20License%20%28AGPL%29%20v3.0-blue.svg" alt="license" />
</a>

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
