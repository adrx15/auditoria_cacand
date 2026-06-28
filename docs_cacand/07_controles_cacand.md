# Políticas de Prevención y Controles de Mitigación

## 1. Gobierno de Seguridad
Se establece un marco de desarrollo seguro (SDLC) obligatorio para todas las células de software que trabajen en el portal de AeroAustral.

## 2. Controles Técnicos Específicos
* **WAF (Web Application Firewall):** Implementación de reglas para bloquear patrones sospechosos (`OR 1=1`, etiquetas `<script>`, operadores `;`).
* **Auditoría de Código Automatizada:** Integración de herramientas SAST/DAST en los pipelines de CI/CD para detectar inyecciones antes de pasar a producción.