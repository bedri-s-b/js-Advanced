function createAssemblyLine() {
    let result = {};
    result.hasClima = function (myCar) {
        myCar['temp'] = 21;
        myCar['tempSettings'] = 21;
        myCar['adjustTemp'] = function () {
            if (this.temp !== this.tempSettings) {
                this.temp < this.tempSettings ? (this.temp += 1) : (this.temp -= 1)
            }

        }



    };

    result.hasAudio = function (myCar) {
        myCar['currentTrack'] = {};
        myCar['nowPlaying'] = () => {
            if (myCar.currentTrack) {
                console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);
            }

        }
    }

    result.hasParktronic = function (myCar) {
        myCar.checkDistance = (distance) => {
            let beep = distance < 0.1 ? "Beep! Beep! Beep!"
                : distance >= 0.1 && distance < 0.25 ? "Beep! Beep!"
                    : distance >= 0.25 && distance < 0.5 ? "Beep!"
                        : null

            if(beep){
                return beep;
            }
        }
    }

    return result;
}



const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);