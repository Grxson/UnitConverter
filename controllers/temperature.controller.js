export function getTemperaturePage(req, res) {
    res.render('temperature', { result: null });
}

function convertTemperatureValue(value, from, to) {
    value = parseFloat(value);
    if (from === to) return value;

    if (from === 'C') {
        if (to === 'F') return value * 9 / 5 + 32;
        if (to === 'K') return value + 273.15;
    } else if (from === 'F') {
        if (to === 'C') return (value - 32) * 5 / 9;
        if (to === 'K') return (value - 32) * 5 / 9 + 273.15;
    } else if (from === 'K') {
        if (to === 'C') return value - 273.15;
        if (to === 'F') return (value - 273.15) * 9 / 5 + 32;
    }
}

export function convertTemperature(req, res) {
    const { value, from, to } = req.body;
    const result = convertTemperatureValue(value, from, to);
    res.render('temperature', { result });
}
