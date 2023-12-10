import fs from "fs";
import archieml from "archieml";
const aml_directory = './aml/';
const output_directory = './src/routes/_data/';
const CWD = process.cwd();

fs.readdir(aml_directory, (err, files) => {
	for (let f of files) {
		try {
			const input = `${aml_directory}${f}`;
			console.log(`Reading: ${input}`)
			const text = fs.readFileSync(input, 'utf8');
			const parsed = archieml.load(text);
			const str = JSON.stringify(parsed);

			const output_name = f.replace('.aml','');
			const output = `${output_directory}${output_name}.json`;
			console.log(`Writing: ${output}`)
			fs.writeFileSync(output, str);
		} catch (err) {
			console.log(err);
		}

	};
});
