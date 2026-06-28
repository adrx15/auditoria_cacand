# Informe de Auditoría de Seguridad: AeroAustral Líneas Aéreas

## 1. Contexto del Negocio
AeroAustral Líneas Aéreas es una organización del rubro de transporte comercial que gestiona operaciones críticas a través de su portal de clientes. Este portal web custodia activos de altísima sensibilidad:
* **Datos de Reservas:** Itinerarios de vuelo, fechas y destinos.
* **Información de Pasaportes:** Nombres legales, números de documento y nacionalidades (bajo regulaciones internacionales de fronteras).
* **Datos de Pago:** Tarjetas de crédito y transacciones financieras (sujetas al cumplimiento normativo PCI-DSS).

## 2. Objetivos de la Auditoría
El propósito de este análisis es evaluar el comportamiento del portal web en un ambiente controlado de pruebas (DVWA) bajo un nivel de seguridad "Low", simulando fallas críticas de desarrollo para determinar el impacto financiero, reputacional y legal en el negocio de la aerolínea.