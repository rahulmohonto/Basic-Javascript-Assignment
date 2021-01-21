// 1st problem , Kilometer To Meter Conversion

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        const meter = kilometer * 1000;
        return meter;
    }
    else return "Oh Dear, distance can't be negative";
}

