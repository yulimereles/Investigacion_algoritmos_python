
def busqueda_binaria(lista, objetivo):
    izquierda, derecha = 0, len(lista) - 1

    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2
        if lista[medio] == objetivo:
            return medio  # Retorna el índice donde se encontró el objetivo
        elif lista[medio] < objetivo:
            izquierda = medio + 1
        else:
            derecha = medio - 1

    return -1  # Retorna -1 si no se encuentra el objetivo

# Ejemplo de uso
lista = [1, 3, 5, 7, 9]
objetivo = 7
resultado = busqueda_binaria(lista, objetivo)
print(f"El objetivo {objetivo} está en el índice: {resultado}")