// 1266. Minimum Time Visiting All Points

/**
 * @param {number[][]} points
 * @return {number}
 */
 var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    for(let i = 0; i<points.length-1; i++){
        ans += Math.max(Math.abs(points[i][0]-points[i+1][0]),Math.abs(points[i][1]-points[i+1][1]))
    }
    return ans;
};

points = [[1,1],[3,4],[-1,0]];

console.log(minTimeToVisitAllPoints(points));