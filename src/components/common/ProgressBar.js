import React from "react";

function ProgressBar(props) {
    const { label, min, max, percent } = props;
    return (
        <div class="el-progress">
            {label && <span className="el-progress-label">{label}</span>}
            {percent && <span className="el-progress-count">{`% ${percent}`}</span>}
            <div className="el-progress-line">
                <div className="el-progress-bar" min={min || 0} max={max || 100} style={{width: `${percent}%`}} />
            </div>
        </div>
    );
}

export default ProgressBar;
