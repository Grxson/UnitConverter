export function getLengthPage(req, res) {

    res.render('length', { result: null });
}

const factors = {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1_000_000,
    in: 25.4,
    ft: 304.8,
    yd: 914.4,
    mi: 1_609_344,
};

export function convertLength(req, res) {
    const { value, from, to } = req.body;
    const nmValue = parseFloat(value) * factors[from];
    const result = nmValue / factors[to];
    res.render('length', { result })
}