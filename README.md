# Práctica CI/CD

## Descripción

Para la práctica se debe implementar un pipeline de CI/CD para una aplicación escrita en el lenguaje de programación que se desee. La aplicación debe ser una aplicación que se pueda ejecutar en un contenedor de Docker y utilizar git flow para la gestión de ramas.

### El pipeline de CI tiene que:

- Construir la aplicación.
- Ejecutar los tests de la aplicación.
- Generar un informe de cobertura de los tests.
- Ejecutar el linting de la aplicación.
- Ejecutar un análisis estático de código.
- Ejecutar un analisis de vulnerabilidades (GitGuardian).
- Generar un artefacto de la aplicación. (solo en la rama master/main)
- Publicar el artefacto en un repositorio de artefactos. (solo en la rama master/main)
- Desplegar en un cluster de Kubernetes usando ArgoCD en la rama master/main.

### Entregables:

- El enlace al repositorio de GitHub donde se encuentra el código de la aplicación.
- El enlace al repositorio de artefactos donde se encuentra el artefacto de la aplicación.
- El fichero de configuración del pipeline de CI/CD.
- Screenshots del pipeline de CI/CD.
- Los manifestos de Kubernetes para el despliegue de la aplicación.
- Enlace o screenshot de la aplicación desplegada.
- Enlace o screenshot del proyecto en ArgoCD.
- Enlace o screenshot del proyecto en SonarCloud.
- Enlace o screenshot del proyecto en GitGuardian.
- Enlace a un vídeo de Youtube donde se explique la práctica.