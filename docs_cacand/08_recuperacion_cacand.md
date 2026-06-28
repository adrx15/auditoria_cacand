# Plan de Recuperación ante Desastres (DRP)

## 1. Estrategia de Resiliencia Tecnológica
En caso de un incidente crítico derivado de una Inyección de Comandos que comprometa el servidor principal:

* **Aislamiento Inmediato:** Revocación automática de credenciales comprometidas y aislamiento de la red del servidor afectado.
* **Plan de Continuidad:** Despliegue automatizado de la infraestructura en una región secundaria de la nube mediante infraestructura como código (IaC).
* **Copias de Seguridad (Backups):** Respaldos diarios encriptados e inmutables de la base de datos de reservas almacenados de forma aislada.