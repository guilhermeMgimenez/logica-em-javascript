function conversor(m = 0,cm = 0) {
    m = parseFloat(m)
    cm = parseFloat(cm)

    cm = m * 100

    document.querySelector("#resultado").innerHTML = "A conversão fica: " + cm
}
