export function getWeightPage(req, res) {
    res.render('weight', { result: null });
}

const factors = {
    mg: 1,
    g: 1000,
    kg: 1_000_000,
    oz: 28_349.5,
    lb: 453_592,
};

export function convertWeight(req, res) {
    const { value, from, to } = req.body;
    const mgValue = parseFloat(value) * factors[from];
    const result = mgValue / factors[to];
    res.render('weight', { result });
}
