def busqueda_lineal(lista, objetivo):
    for i in range(len(lista)):
        if lista[i] == objetivo:
            return i  # Retorna el índice donde se encontró el objetivo
    return -1  # Retorna -1 si no se encuentra el objetivo

# Ejemplo de uso
lista = [5, 3, 7, 1, 9]
objetivo = 7
resultado = busqueda_lineal(lista, objetivo)
print(f"El objetivo {objetivo} está en el índice: {resultado}")