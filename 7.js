class VillageState {
    constructor(robotPosition, parcelPositions) {
      this.robotPosition = robotPosition;
      this.parcelPositions = parcelPositions;
    }
  
    move(destination) {
      if (!roadGraph[this.robotPosition].includes(destination)) {
        return this;
      } else {
        let parcelPositions = this.parcelPositions.map(p => {
          if (p.place != this.robotPosition) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcelPositions);
      }
    }
  }