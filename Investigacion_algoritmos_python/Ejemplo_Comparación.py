# Definición de la función de búsqueda lineal
def busqueda_lineal(lista, objetivo):
    # Iterar sobre todos los índices de la lista
    for i in range(len(lista)):
        # Si el elemento en la posición i es igual al objetivo, se ha encontrado el objetivo
        if lista[i] == objetivo:
            return i  # Retorna el índice donde se encontró el objetivo
    return -1  # Si no se encuentra el objetivo, retorna -1

# Definición de la función de búsqueda binaria
def busqueda_binaria(lista, objetivo):
    # Inicializar los límites de la búsqueda
    izquierda, derecha = 0, len(lista) - 1

    # Mientras el límite izquierdo no sobrepase el derecho
    while izquierda <= derecha:
        # Calcular el índice del elemento medio
        medio = (izquierda + derecha) // 2

        # Comparar el elemento en el índice medio con el objetivo
        if lista[medio] == objetivo:
            return medio  # Si se encuentra el objetivo, retornar el índice
        elif lista[medio] < objetivo:
            izquierda = medio + 1  # Ajustar el límite izquierdo si el objetivo es mayor
        else:
            derecha = medio - 1  # Ajustar el límite derecho si el objetivo es menor

    return -1  # Si no se encuentra el objetivo, retornar -1

# Ejemplo de listas
lista_no_ordenada = [5, 3, 7, 1, 9]  # Lista no ordenada
lista_ordenada = [1, 3, 5, 7, 9]  # Lista ordenada
objetivo = 7  # Elemento que queremos encontrar

# Usando búsqueda lineal en una lista no ordenada
resultado_lineal = busqueda_lineal(lista_no_ordenada, objetivo)
print(f"(Lineal) El objetivo {objetivo} está en el índice: {resultado_lineal}")

# Usando búsqueda binaria en una lista ordenada
resultado_binario = busqueda_binaria(lista_ordenada, objetivo)
print(f"(Binaria) El objetivo {objetivo} está en el índice: {resultado_binario}")
