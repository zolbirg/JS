

// function WayToTaech({props}) {
  export default function WayToTaech({ title, description }) {
        return (
          <li>
            <p>
              <strong>{title}</strong>
              {/* {props.description} */}
              {description}
            </p>
          </li>
        );
      }