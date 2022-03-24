import { useState } from 'react';
import {
    FormLabel,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
} from '@chakra-ui/react';

function ResponceNumber(props) {
    const question = props.question;
    const key = props.qKey + 'input';
    const min = parseInt(question.min);
    const max = parseInt(question.max);

    const [sliderValue, setSliderValue] = useState(min);
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <>
            <FormLabel htmlFor={key} fontSize="xl" fontWeight="extrabold">
                {question.question}
            </FormLabel>

            <Slider
                id="key"
                defaultValue={min}
                min={min}
                max={max}
                colorScheme="purple"
                onChange={(v) => setSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onChangeEnd={(val) => console.log(val)}
            >
                {generateTicks(min, max, key)}
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg="teal.500"
                    color="white"
                    placement="top"
                    isOpen={showTooltip}
                    label={`${sliderValue}`}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
        </>
    );
}

function generateTicks(min, max, key) {
    const list = [];
    for (let i = min; i <= max; i++) {
        list.push(
            <SliderMark value={i} key={key + i} mt="1" ml="-1" fontSize="sm">
                {i}
            </SliderMark>,
        );
    }
    return list;
}

export { ResponceNumber };
